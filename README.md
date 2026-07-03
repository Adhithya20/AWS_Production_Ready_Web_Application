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
Deployment Guide

Create:
docs/DeploymentGuide.md
Contents:
# Deployment Guide

## Step 1
Launch EC2 Ubuntu 24.04

## Step 2
Create Security Group

- Port 22
- Port 80
- Port 443

## Step 3
Install Node.js

## Step 4
Install Nginx

## Step 5
Clone Repository

## Step 6
Install Dependencies

## Step 7
Configure Nginx

## Step 8
Configure systemd

## Step 9
Configure HTTPS

## Step 10
Configure GitHub Actions

## Step 11
Configure CloudWatch

## Step 12
Configure API Gateway

## Step 13
Run Load Test

