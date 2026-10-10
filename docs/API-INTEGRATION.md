# Backend integration boundary

The current frontend is deliberately a demo shell. API calls must be implemented and tested before presenting any workflow as live.

The provided API documentation identifies the base URL as `http://localhost:8000` and the versioned API base as `http://localhost:8000/api/v1`. Documented routes include:

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`
- `POST /engagements/`
- `GET /engagements/`
- `GET /engagements/{engagement_id}`
- `PATCH /engagements/{engagement_id}`
- `POST /uploads/{engagement_id}/upload` (multipart field `file`)
- `GET /uploads/{engagement_id}/uploads`
- `POST /uploads/{engagement_id}/validate/{artifact_id}`
- `GET /health`

The exact API schemas and response contracts in backend `/docs` or `/openapi.json` are authoritative. The current login, upload picker, sample reconciliation, audit events, findings, workpaper and sign-off states are local UI demonstrations. They are not wired to these endpoints.

## Integration checklist

1. Create an API client around `VITE_API_BASE_URL`.
2. Connect login/register and handle access tokens according to backend documentation.
3. Load engagements from the API instead of local sample rows.
4. Upload files using `FormData` with the documented `file` field.
5. Display validation results only after the backend responds.
6. Keep reconciliation, findings, evidence lineage and sign-off unavailable until actual API contracts and authorization rules are confirmed.
7. Add integration tests for error states, expired sessions, permission boundaries, upload failure and server persistence.
8. Never infer hash-chain verification, audit approval or persisted sign-off from a UI animation or local state.
