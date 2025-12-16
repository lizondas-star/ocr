import cv2
import os
import numpy as np

def preprocess_image(image_path):
    # Load image
    img = cv2.imread(image_path)

    # 1. Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 2. Simple threshold
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Display processed image
    cv2.imshow('Processed Image', thresh)
    cv2.waitKey(0)
    # cv2.destroyAllWindows()

    # Save processed image
    processed_path = image_path.replace("uploads", "uploads/processed")
    os.makedirs(os.path.dirname(processed_path), exist_ok=True)
    cv2.imwrite(processed_path, thresh)
    return processed_path
    # return processed_path