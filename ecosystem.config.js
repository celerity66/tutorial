module.exports = {
  apps: [{
    name: 'tutorial',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-206-229-194.compute-1.amazonaws.com',
      key: '~/.ssh/tutorial-ec2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:celerity66/tutorial.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}