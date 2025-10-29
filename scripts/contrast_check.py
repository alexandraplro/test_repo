#!/usr/bin/env python3
"""
Simple WCAG contrast checker for the Modern Dark theme colors in styles.css.
Finds CSS variables (hex colors) and computes contrast ratios for key pairs:
 - primary nav text (--muted) vs header background (--header-bg)
 - hover/accent (--accent) vs header background
 - CTA text (#fff) vs CTA background (--accent-2)

If a pair fails 4.5:1, the script suggests a darker variant (mix with black)
that meets the threshold.

Run: python3 scripts/contrast_check.py
"""
import re
from pathlib import Path


def hex_to_rgb(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(ch*2 for ch in h)
    return tuple(int(h[i:i+2], 16) / 255.0 for i in (0, 2, 4))


def srgb_to_linear(c):
    if c <= 0.04045:
        return c / 12.92
    return ((c + 0.055) / 1.055) ** 2.4


def luminance(hexcolor):
    r, g, b = hex_to_rgb(hexcolor)
    R = srgb_to_linear(r)
    G = srgb_to_linear(g)
    B = srgb_to_linear(b)
    return 0.2126 * R + 0.7152 * G + 0.0722 * B


def contrast_ratio(a, b):
    la = luminance(a)
    lb = luminance(b)
    L1 = max(la, lb)
    L2 = min(la, lb)
    return (L1 + 0.05) / (L2 + 0.05)


def mix_with_black(hexcolor, percent):
    # percent: 0-1 amount of black to mix (0.0 returns original, 1.0 returns black)
    r, g, b = hex_to_rgb(hexcolor)
    r2 = r * (1 - percent)
    g2 = g * (1 - percent)
    b2 = b * (1 - percent)
    return '#{0:02x}{1:02x}{2:02x}'.format(int(r2*255), int(g2*255), int(b2*255))


def find_css_vars(path):
    txt = Path(path).read_text(encoding='utf8')
    vars_found = {}
    for m in re.finditer(r"--([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,6})", txt):
        vars_found[m.group(1)] = m.group(2)
    return vars_found


def ensure_contrast(fg, bg, threshold=4.5):
    ratio = contrast_ratio(fg, bg)
    if ratio >= threshold:
        return True, ratio, fg
    # attempt to darken fg by mixing with black until it passes
    for p in [i/100.0 for i in range(5, 101, 5)]:
        candidate = mix_with_black(fg, p)
        r = contrast_ratio(candidate, bg)
        if r >= threshold:
            return False, ratio, candidate
    return False, ratio, None


def main():
    css = Path(__file__).parent.parent / 'styles.css'
    if not css.exists():
        print('styles.css not found at', css)
        return 1

    vars = find_css_vars(css)
    header_bg = vars.get('header-bg')
    muted = vars.get('muted')
    accent = vars.get('accent')
    accent2 = vars.get('accent-2')

    checks = []
    if header_bg and muted:
        checks.append(('Nav text (muted)', muted, header_bg))
    if header_bg and accent:
        checks.append(('Accent (hover)', accent, header_bg))
    if accent2:
        checks.append(('CTA text (white) on accent-2', '#ffffff', accent2))

    print('Found variables:', vars)
    print('\nContrast checks (threshold 4.5:1):\n')
    suggestions = {}
    for name, fg, bg in checks:
        ok, ratio, suggested = ensure_contrast(fg, bg)
        status = 'PASS' if ok else 'FAIL'
        print(f'{name}: fg={fg} bg={bg} => ratio={ratio:.2f} -> {status}')
        if not ok:
            if suggested:
                print(f'  Suggested darker fg to meet 4.5:1: {suggested}')
                suggestions[name] = (fg, suggested)
            else:
                print('  Could not find a darker variant that meets threshold by mixing with black.')

    if suggestions:
        print('\nYou can apply the suggested replacements to styles.css.\n')
    else:
        print('\nAll checked pairs meet the 4.5:1 threshold.')


if __name__ == '__main__':
    raise SystemExit(main())
