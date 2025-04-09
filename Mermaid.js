flowchart TD
    %% Frontend Layer
    subgraph "Frontend"
        FN["Next.js Client"]:::frontend
        RC["Routing & Pages"]:::frontend
        UI["UI Components"]:::frontend
    end

    %% Backend Layer
    subgraph "Backend"
        DC["Django Core"]:::backend
        API["API App"]:::backend
        AS["Assets App"]:::backend
        PF["Portfolio App"]:::backend
        US["Users App"]:::backend
        DM["Management Command"]:::backend
        DB["PostgreSQL Database"]:::database
    end

    %% Documentation & Auxiliary
    subgraph "Documentation & Aux"
        DOC["Project Documentation"]:::docs
    end

    %% Data Flow / Relationships
    FN -->|"API_request"| API
    API -->|"DB_access"| DB
    API -->|"uses_core"| DC
    DC -->|"routes_to"| AS
    DC -->|"routes_to"| PF
    DC -->|"routes_to"| US
    API -->|"delegates_assets"| AS
    API -->|"delegates_portfolio"| PF
    API -->|"delegates_users"| US
    DM -->|"manages"| DC
    RC -->|"defines_routes"| FN
    UI -->|"renders_UI"| FN

    %% Click Events
    click FN "https://github.com/guedes-jr/portfoliox/tree/main/frontend/src/app"
    click RC "https://github.com/guedes-jr/portfoliox/tree/main/frontend/src/app"
    click UI "https://github.com/guedes-jr/portfoliox/tree/main/frontend/src/components"
    click DC "https://github.com/guedes-jr/portfoliox/tree/main/backend/core"
    click API "https://github.com/guedes-jr/portfoliox/tree/main/backend/api"
    click AS "https://github.com/guedes-jr/portfoliox/tree/main/backend/assets"
    click PF "https://github.com/guedes-jr/portfoliox/tree/main/backend/portfolio"
    click US "https://github.com/guedes-jr/portfoliox/tree/main/backend/users"
    click DM "https://github.com/guedes-jr/portfoliox/blob/main/backend/manage.py"
    click DOC "https://github.com/guedes-jr/portfoliox/tree/main/docs/document"
    click DOC "https://github.com/guedes-jr/portfoliox/tree/main/docs/git"

    %% Styles
    classDef frontend fill:#f4b400,stroke:#000,stroke-width:2px;
    classDef backend fill:#34a853,stroke:#000,stroke-width:2px;
    classDef database fill:#ea4335,stroke:#000,stroke-width:2px;
    classDef docs fill:#4285f4,stroke:#000,stroke-width:2px;
