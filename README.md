# AI-Powered Potato Internal Defect Detector

This repository hosts a minimal prototype for detecting internal potato
defects such as hollow heart, black heart, or internal heat necrosis.
A small convolutional neural network is trained on synthetic images of
potato cross-sections and exposed via a Streamlit web application.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. (Optional) Create a synthetic dataset:
   ```bash
   python generate_dataset.py --outdir data --samples 200
   ```
   This creates `train` and `test` splits in the `data/` directory.

## Training

Train the CNN using the generated dataset:

```bash
python train.py --data-dir data --epochs 5
```

This writes `model.pth`, which is consumed by the web application.

## Web UI

Launch the Streamlit interface to classify images as **defect** or
**healthy**:

```bash
streamlit run app.py
```

Upload an X-ray or NIR potato cross-section image to receive a
prediction.
