module.exports = {
apps: [{
name: "taxi-backend",
script: "dist/index.js",
node_args: ["--env-file", ".env"],
instances: 1,
exec_mode: "fork",
watch: false
}]
}

