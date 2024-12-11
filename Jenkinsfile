pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

 agent none
    stages {
            stage('Checkout') {
                agent { label "sme" }
                steps {
                    script {
                     def nodes = nodesByLabel label: 'jenkinsnodes'
                     nodes = nodes.sort()

                        Map tasks = [:]
                        
                        for (int i = 0; i < nodes.size(); i++) {
                            def label = nodes[i]
                            def stageName = "Checkout ${nodes[i]}"
                            tasks[label] = {
                                node(label) {
                                    stage(stageName) {
                                      checkout scm
                                    }
                                }
                            }
                        }
                        
                        timeout(time: 10, unit: 'MINUTES') {
                            parallel(tasks)
                        }
                    }
                }
            }

        stage('Build and Test') {
            agent { label "sme" }
            steps {
                sh 'docker build -f Dockerfile . -t sme-sigpae-poc-testes:latest'
                sh 'docker run --rm sme-sigpae-poc-testes:latest'
            }
        }
    }
}