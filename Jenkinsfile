pipeline {
    agent any
    tools { nodejs "NodeJS" }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-repo/playwright-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Publish Report') {
            steps {
                junit '**/test-results.xml'
                archiveArtifacts '**/test-results/*'
            }
        }
    }
}
