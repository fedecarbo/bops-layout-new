# Docker Setup Workflow Instructions

<critical>The workflow execution engine is governed by: {project-root}/bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/bmad/rapid-proto/workflows/setup-docker/workflow.yaml</critical>

<workflow>

<step n="1" goal="Detect current environment and Docker status">

<action>Check if Docker is installed on the system</action>
<action>Run: docker --version</action>

<check if="docker_found">
  <action>Store Docker version for validation</action>
  <action>Check Docker daemon is running: docker ps</action>
  <check if="docker_running">
    <action>Report: Docker is installed and running</action>
    <action>Set: docker_status = "ready"</action>
  </check>
  <check if="docker_not_running">
    <action>Report: Docker installed but daemon not running</action>
    <ask>Docker is installed but not running. Start Docker Desktop/daemon? (y/n)</ask>
    <check if="user_agrees">
      <action>Guide user to start Docker for their OS</action>
      <action>Wait and re-check: docker ps</action>
    </check>
  </check>
</check>

<check if="docker_not_found">
  <action>Report: Docker is not installed</action>
  <action>Detect operating system (Windows/Mac/Linux)</action>
  <ask>Docker is not installed. Would you like guidance on installing Docker? (y/n)</ask>
  <check if="user_agrees">
    <action>Provide OS-specific installation instructions:

**Windows:**
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop/
2. Run the installer
3. Restart computer if prompted
4. Launch Docker Desktop
5. Wait for Docker to start (check system tray)

**Mac:**
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop/
2. Open the .dmg file and drag to Applications
3. Launch Docker from Applications
4. Grant necessary permissions
5. Wait for Docker to start (check menu bar)

**Linux:**
1. Run: curl -fsSL https://get.docker.com -o get-docker.sh
2. Run: sudo sh get-docker.sh
3. Add user to docker group: sudo usermod -aG docker $USER
4. Log out and back in
5. Start Docker: sudo systemctl start docker
    </action>
    <ask>Have you installed Docker? Type 'verify' when ready to check, or 'exit' to stop.</ask>
    <check if="verify">
      <action>Re-check Docker installation: docker --version</action>
      <check if="still_not_found">
        <action>STOP - Docker installation incomplete. Please complete installation and run this workflow again.</action>
      </check>
    </check>
    <check if="exit">
      <action>STOP - User will install Docker manually and return later</action>
    </check>
  </check>
  <check if="user_declines">
    <action>STOP - Cannot proceed without Docker</action>
  </check>
</check>

<action>Verify Docker Compose is available</action>
<action>Run: docker compose version</action>
<action>Note: Modern Docker Desktop includes Compose V2 by default</action>

</step>

<step n="2" goal="Determine target project for Docker setup">

<check if="mode == 'verify'">
  <action>Skip project selection - checking existing setup only</action>
  <goto step="5">Jump to verification</goto>
</check>

<ask response="setup_scenario">Are you setting up Docker for:
a) A new prototype (not created yet)
b) An existing prototype that needs Docker
c) Just want Docker ready for future prototypes</ask>

<check if="setup_scenario == 'a' OR setup_scenario == 'c'">
  <action>Set: project_name = "rapid-proto-template"</action>
  <action>Set: target_project_path = current directory</action>
  <action>Note: Will create reusable Docker template</action>
</check>

<check if="setup_scenario == 'b'">
  <ask response="project_name">What's the name of your existing prototype?</ask>
  <ask response="target_project_path">What's the path to your prototype? (default: ./{{project_name}})</ask>
  <action>Validate project path exists</action>
  <check if="project_not_found">
    <action>ERROR - Project directory not found at {{target_project_path}}</action>
    <ask>Would you like to create it? (y/n)</ask>
  </check>
</check>

<action>Store project configuration for Docker setup</action>

</step>

<step n="3" goal="Create Docker configuration files">

<action>Load Docker templates from: {docker_templates}</action>

<action>Create Dockerfile in project root</action>
<action>Read template: {docker_templates}/Dockerfile.template</action>
<action>Replace variables:
- {{node_version}} with {docker_config}:node_version
- {{work_dir}} with {docker_config}:work_dir
- {{port}} with {docker_config}:port
</action>

<action>Write Dockerfile to: {{target_project_path}}/Dockerfile</action>

<action>Create docker-compose.yml in project root</action>
<action>Read template: {docker_templates}/docker-compose.yml.template</action>
<action>Replace variables:
- {{project_name}} with project_name
- {{port}} with {docker_config}:port
- {{work_dir}} with {docker_config}:work_dir
</action>

<action>Write docker-compose.yml to: {{target_project_path}}/docker-compose.yml</action>

<action>Create .dockerignore file to optimize builds</action>
<action>Write to: {{target_project_path}}/.dockerignore</action>

<action>Add Docker-specific npm scripts to package.json (if exists)</action>
<check if="package.json exists">
  <action>Add scripts:
- "docker:build": "docker compose build"
- "docker:up": "docker compose up"
- "docker:dev": "docker compose up --build"
- "docker:down": "docker compose down"
- "docker:clean": "docker compose down -v"
  </action>
</check>

<action>Report created files:
✅ Dockerfile
✅ docker-compose.yml
✅ .dockerignore
✅ package.json scripts (if applicable)
</action>

</step>

<step n="4" goal="Build and verify Docker environment">

<ask>Ready to build the Docker image? This may take a few minutes on first run. (y/n)</ask>

<check if="user_agrees">
  <action>Navigate to project directory: cd {{target_project_path}}</action>
  <action>Build Docker image: docker compose build</action>
  <action>Monitor build output for errors</action>

  <check if="build_successful">
    <action>Report: ✅ Docker image built successfully</action>
  </check>

  <check if="build_failed">
    <action>Report: ❌ Docker build failed</action>
    <action>Display error logs</action>
    <ask>Common fixes:
1. Check Dockerfile syntax
2. Verify internet connection (for package downloads)
3. Ensure Docker has enough memory allocated
4. Check for port conflicts

Would you like to retry? (y/n)</ask>
    <check if="retry">
      <goto step="4">Retry build</goto>
    </check>
  </check>
</check>

<check if="user_declines">
  <action>Docker files created but image not built yet</action>
  <action>User can build later with: docker compose build</action>
</check>

<action>Test Docker container can start</action>
<ask>Test the Docker container? (It will start and stop quickly) (y/n)</ask>

<check if="user_agrees_to_test">
  <action>Start container: docker compose up -d</action>
  <action>Wait 5 seconds for startup</action>
  <action>Check container status: docker compose ps</action>
  <action>Stop container: docker compose down</action>

  <check if="test_successful">
    <action>Report: ✅ Docker container working perfectly</action>
  </check>

  <check if="test_failed">
    <action>Report: ⚠️ Container test had issues</action>
    <action>Check logs: docker compose logs</action>
  </check>
</check>

</step>

<step n="5" goal="Document Docker setup and provide usage guide">

<action>Generate Docker usage documentation</action>

<action>Create or update: {{target_project_path}}/docs/rapid-prototype/docker-setup.md (if docs folder exists)</action>

<action>Display setup summary:</action>

**🐳 Docker Setup Complete!**

**Your Docker Environment:**
- Project: {{project_name}}
- Location: {{target_project_path}}
- Node Version: {docker_config}:node_version
- Port: {docker_config}:port

**Quick Commands:**

```bash
# Start development server in Docker
docker compose up

# Or use npm scripts (if package.json exists):
npm run docker:dev

# Build image
docker compose build

# Stop containers
docker compose down

# Clean everything (containers, volumes, images)
docker compose down -v
```

**How It Works:**
- Your code is volume-mounted (changes sync automatically)
- Next.js dev server runs with hot-reload
- Access at: http://localhost:{docker_config}:port
- Turbopack bundler works inside container

**Next Steps:**
1. When running rapid-prototype workflow, it will now detect Docker
2. All npm commands will run inside the container
3. Your code stays on your machine (volume mounted)
4. No need to install Node.js locally

**Troubleshooting:**
- Port conflict: Change port in docker-compose.yml
- Slow builds: Increase Docker memory in Docker Desktop settings
- Permission errors: Check volume mount paths in docker-compose.yml

</step>

<step n="6" goal="Integration guidance with rapid-prototype workflow">

<action>Explain how Docker integrates with scaffolding</action>

**Integration with Atlas:**

When you run `*scaffold` or `*quick-start`, Atlas will now:

1. Detect Docker is available ✅
2. Ask: "Use Docker environment? (y/n)"
3. If yes: Run all commands inside Docker container
4. If no: Fall back to native Node.js

**Manual Docker Usage:**

You can also use Docker independently:

```bash
# Scaffold with native Node.js first
*scaffold → creates project

# Then add Docker anytime
*setup-docker → adds Docker to existing project

# Or setup Docker first
*setup-docker → Docker ready for future projects
```

**Working in Docker:**

```bash
# Start dev server
cd {{project_name}}
docker compose up

# In another terminal - run commands in container
docker compose exec app npm install some-package
docker compose exec app npm run build
docker compose exec app npx shadcn@latest add button
```

<ask>Would you like to test the complete flow with a sample prototype? (y/n)</ask>

<check if="user_wants_test">
  <action>Guide: Let's create a quick test prototype:

1. Exit this workflow
2. Load Atlas agent
3. Run: *quick-start
4. When prompted about Docker, choose "yes"
5. Watch it scaffold in Docker
6. Run: docker compose up
7. Open: http://localhost:3000

This proves the full integration works!
  </action>
</check>

</step>

</workflow>
