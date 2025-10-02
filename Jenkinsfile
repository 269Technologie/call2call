pipeline {
    agent any
    triggers {
        githubPush()   // se déclenche automatiquement à chaque push GitHub
    }
    environment {
        REGISTRY = "localhost:5151"
        REGISTRY_IMAGE = "localhost:5151/call2call"
        REGISTRY_CREDENTIALS = "registry-credentials"
        DOCKER_IMAGE = ''
        VERSION = ''
        HOST_PORT = "8033"      
        CONTAINER_PORT = "3011" 
    }

    stages {
        stage('Set Build Environment') {
            steps {
                script {
                    def uniqueId = UUID.randomUUID().toString().replace("-", "").substring(0, 8)
                    env.BUILD_MONTH = "${new Date().format('MM')}"
                    env.BUILD_DAY = "${new Date().format('dd')}"
                    env.BUILD_HOUR = "${new Date().format('HH')}"
                    env.BUILD_MINUTE = "${new Date().format('mm')}"
                    VERSION = "${env.BUILD_NUMBER}-${env.BUILD_MONTH}.${env.BUILD_DAY}.${env.BUILD_HOUR}.${env.BUILD_MINUTE}-${uniqueId}"
                }
                sh "ls -al"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    DOCKER_IMAGE = docker.build("${REGISTRY_IMAGE}:${VERSION}", ".")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("http://localhost:5151", "${REGISTRY_CREDENTIALS}") {
                        DOCKER_IMAGE.push()
                    }
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    echo "Déploiement du conteneur Docker"

                    sh """
                    docker stop call2call || true
                    docker rm call2call || true

                    docker run -d --name call2call -p ${HOST_PORT}:${CONTAINER_PORT} ${REGISTRY_IMAGE}:${VERSION}
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                echo "Suppression de l'image construite"
                sh "docker rmi -f ${REGISTRY_IMAGE}:${VERSION} || true"
            }
            cleanWs()
        }
    }
}
