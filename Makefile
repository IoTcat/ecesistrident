.phony: help install dev shell serve build lint type-check test format

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)

CMD_PREFIX := sudo docker run -it --rm -u "$(shell id -u):$(shell id -g)" --name frontend --network ecesis -v "$(shell pwd)":/app -w /app node:18 

ifndef DOCKER
$(info ##################################################)
$(info Docker is not available. Directly using yarn..)
$(info ##################################################)
CMD_PREFIX :=  
endif

install: package.json ## install dependencies
	@if [ "$(CI)" != "true" ]; then \
		echo "Full install..."; \
		$(CMD_PREFIX) yarn; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		echo "Frozen install..."; \
		yarn --frozen-lockfile; \
	fi

dev: ## run the dev environment
	@$(CMD_PREFIX) yarn dev --host

shell: ## open shell in a container
	@$(CMD_PREFIX) bash

serve: ## run the production environment
	@$(CMD_PREFIX) yarn serve

build: ## compile the code to static js
	@$(CMD_PREFIX) yarn build

lint: ## lint the code and check coding conventions
	@echo "Running linter..."
	@$(CMD_PREFIX) yarn lint

type-check: ## check types
	@echo "Running type-check..."
	@echo $(CMD_PREFIX)
	@$(CMD_PREFIX) yarn type-check

test: lint type-check ## run all tests

format: ## format the code
	@echo "Running formatter..."
	@$(CMD_PREFIX) yarn format

clean: ## clean the build directory
	@echo "Cleaning..."
	@rm -rf dist