import torch
from transformers import AutoTokenizer, AutoModelForQuestionAnswering

tokenizer = AutoTokenizer.from_pretrained("mrm8488/bert-base-spanish-wwm-cased-finetuned-spa-squad2-es")

model = AutoModelForQuestionAnswering.from_pretrained("mrm8488/bert-base-spanish-wwm-cased-finetuned-spa-squad2-es")

def main():
  pytorch_model = Net()
  pytorch_model.load_state_dict(torch.load('pytorch_model.bin'))
  pytorch_model.eval()
  dummy_input = torch.zeros(280 * 280 * 4)
  torch.onnx.export(pytorch_model, dummy_input, 'onnx_model.onnx', verbose=True)


if __name__ == '__main__':
  main()