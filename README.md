# DevOps Technical Assignment

## Overview

This project demonstrates deployment of a production-like Node.js application on AWS Free Tier.

## AWS Services Used

- Amazon EC2
- Amazon IAM
- Amazon S3
- Amazon CloudWatch
- Amazon API Gateway

## Technology Stack

- Ubuntu 24.04
- Node.js
- Express.js
- Nginx
- GitHub Actions
- k6

## Features

- Reverse Proxy using Nginx
- HTTPS (Self-Signed SSL)
- CI/CD with GitHub Actions
- CloudWatch Monitoring
- CloudWatch Logging
- S3 Backup
- API Gateway Integration
- Load Testing using k6

## Run Application

```bash
npm install
node app.js
```

## CI/CD

Push to the `main` branch to automatically deploy the application.

## Monitoring

CloudWatch Agent collects:

- CPU
- Memory
- Disk
- Nginx Logs
- Application Logs

## Load Testing

Performed using k6.
