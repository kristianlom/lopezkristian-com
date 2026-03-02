# Security Policy

## Supported Versions

This repository follows a rolling security policy for the `main` and `dev` branches.
Feature branches inherit security fixes from `dev`.

## Reporting a Vulnerability

If you discover a vulnerability:

1. Do not open a public issue with exploit details.
2. Contact the maintainer through the contact form on the site.
3. Include reproduction steps, impact, and mitigation ideas.

Expected response targets:

- Initial acknowledgement: within 72 hours
- Triage decision: within 7 days
- Remediation plan: based on severity and blast radius

## Secure Development Baseline

- No secrets in source code or committed `.env` files
- Mandatory CI gates: lint, typecheck, build
- Dependency auditing in CI
- Secret scanning in CI
- Least-privilege access for deployment tokens
