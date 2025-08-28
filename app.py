"""Streamlit web app for potato defect detection."""
from __future__ import annotations

from pathlib import Path

import streamlit as st
import torch
from PIL import Image
from torchvision import transforms

from train import SimpleCNN


def load_model(model_path: Path) -> torch.nn.Module:
    model = SimpleCNN()
    model.load_state_dict(torch.load(model_path, map_location="cpu"))
    model.eval()
    return model


def predict(model: torch.nn.Module, image: Image.Image) -> str:
    transform = transforms.Compose([
        transforms.Grayscale(),
        transforms.Resize((128, 128)),
        transforms.ToTensor(),
    ])
    tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        outputs = model(tensor)
        _, pred = torch.max(outputs, 1)
    return ["defect", "healthy"][pred.item()]


def main() -> None:
    st.title("Potato Internal Defect Detector")
    st.write("Upload an X-ray or NIR image of a potato cross-section to detect hidden defects.")
    model_path = Path("model.pth")
    if not model_path.exists():
        st.error("Trained model not found. Please run train.py first.")
        return

    model = load_model(model_path)
    uploaded = st.file_uploader("Choose an image", type=["png", "jpg", "jpeg"])
    if uploaded is not None:
        image = Image.open(uploaded)
        st.image(image, caption="Uploaded image", use_column_width=True)
        label = predict(model, image)
        st.success(f"Prediction: {label}")


if __name__ == "__main__":
    main()
