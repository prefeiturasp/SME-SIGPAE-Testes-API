pipeline {
    agent any

    environment {
        NODE_VERSION = '22.x' 
    }

    stages {
        stage('Preparar Ambiente') {
            steps {
                script {
                    sh 'curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -'
                    sh 'apt-get install -y nodejs'
                    
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Checkout do Código') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Arquivar Resultados') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4,cypress/screenshots/**/*.png,cypress/reports/**/*.json', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            junit 'cypress/reports/*.xml'
        }

        failure {
            mail to: 'seu-email@example.com',
                 subject: "Falha no Build #${env.BUILD_NUMBER}",
                 body: "Confira os detalhes do build em: ${env.BUILD_URL}"
        }
    }
}
