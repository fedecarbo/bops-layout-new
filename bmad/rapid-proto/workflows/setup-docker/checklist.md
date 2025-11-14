# Docker Setup Workflow Validation Checklist

## Environment Validation

- [ ] Docker is installed and version detected
- [ ] Docker daemon is running (docker ps succeeds)
- [ ] Docker Compose is available and version confirmed
- [ ] User has appropriate Docker permissions (no sudo required on Linux)

## Project Configuration

- [ ] Target project path is valid or created
- [ ] Project name is set and valid (no spaces, special chars)
- [ ] Docker configuration variables are resolved (node_version, port, work_dir)

## Docker Files Created

- [ ] Dockerfile exists in project root
- [ ] docker-compose.yml exists in project root
- [ ] .dockerignore exists in project root
- [ ] All template variables are replaced (no {{}} remaining)

## Docker Build Validation

- [ ] Docker image builds successfully (no errors)
- [ ] Image size is reasonable (check: docker images)
- [ ] No security warnings in build output
- [ ] Build completes in reasonable time (<5 minutes for first build)

## Container Functionality

- [ ] Container starts successfully (docker compose up)
- [ ] Container is accessible on configured port
- [ ] Volume mounts are working (code changes reflect)
- [ ] Hot-reload works (test by changing a file)
- [ ] Container stops cleanly (docker compose down)

## Integration Validation

- [ ] package.json scripts added (if package.json exists)
- [ ] Docker scripts are executable (test: npm run docker:build)
- [ ] Documentation created in docs/rapid-prototype/ (if docs folder exists)
- [ ] No conflicts with existing Docker setup

## User Experience

- [ ] Clear success message displayed
- [ ] Usage instructions provided
- [ ] Next steps are actionable
- [ ] Troubleshooting guidance given

## Edge Cases Handled

- [ ] Docker not installed - installation guidance provided
- [ ] Docker not running - user prompted to start
- [ ] Port conflicts - error handled with guidance
- [ ] Permission errors - clear error messages
- [ ] Build failures - retry option offered
- [ ] Existing Docker files - user warned about overwrite

## Documentation

- [ ] Docker setup documented in project
- [ ] Integration with rapid-prototype workflow explained
- [ ] Manual Docker usage commands provided
- [ ] Common issues troubleshooting included

## Success Criteria

The workflow is successful when:
1. Docker environment is verified working
2. All configuration files are created correctly
3. Docker image builds without errors
4. Container can start and is accessible
5. User understands how to use Docker with prototypes
6. Integration with Atlas agent is clear
