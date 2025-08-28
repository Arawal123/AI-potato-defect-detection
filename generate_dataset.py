"""Generate a synthetic dataset of potato cross-section images.

Healthy images are plain light circles. Defect images contain a dark
spot representing internal issues like hollow heart or black heart.
The script avoids heavy dependencies and relies solely on Pillow.
"""
from __future__ import annotations

import argparse
import random
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw


def generate_image(size: int, defect: bool) -> Image.Image:
    """Create a synthetic potato cross-section."""
    img = Image.new("L", (size, size), color=0)
    draw = ImageDraw.Draw(img)
    draw.ellipse((0, 0, size - 1, size - 1), fill=210)

    if defect:
        radius = random.randint(size // 10, size // 4)
        cx = random.randint(radius, size - radius)
        cy = random.randint(radius, size - radius)
        bbox = (cx - radius, cy - radius, cx + radius, cy + radius)
        draw.ellipse(bbox, fill=40)

    # Add slight noise using Pillow's effect_noise
    noise = Image.effect_noise((size, size), 5).convert("L")
    img = ImageChops.add(img, noise, scale=1.0, offset=0)
    return img


def build_dataset(outdir: Path, samples: int, size: int, test_split: float) -> None:
    classes = ["defect", "healthy"]
    for split in ["train", "test"]:
        for cls in classes:
            (outdir / split / cls).mkdir(parents=True, exist_ok=True)

    n_test = int(samples * test_split)
    for cls in classes:
        for idx in range(samples):
            defect = cls == "defect"
            split = "test" if idx < n_test else "train"
            img = generate_image(size, defect)
            img.save(outdir / split / cls / f"{idx:04d}.png")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Synthetic dataset generator")
    parser.add_argument("--outdir", type=Path, default=Path("data"), help="Output directory")
    parser.add_argument("--samples", type=int, default=100, help="Images per class")
    parser.add_argument("--size", type=int, default=128, help="Image size")
    parser.add_argument("--test-split", type=float, default=0.2, help="Fraction used for test set")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    build_dataset(args.outdir, args.samples, args.size, args.test_split)
    print(f"Dataset written to {args.outdir}")
