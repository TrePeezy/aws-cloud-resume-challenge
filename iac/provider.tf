terraform {
  required_providers {
    aws ={
      version = ">= 4.9.0"
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  access_key = "AKIA2GW3WUSWUS6F6USE"
  secret_key = "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"
  region = "us-east-1"
}