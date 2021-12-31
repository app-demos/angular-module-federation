const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "todos",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      // For remotes (please adjust)
      name: "todos",
      filename: "remoteEntry.js",
      exposes: {
        './TodosAppModule': './projects/todos/src/app/todos-app/todos-app.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "header": "header@http://localhost:4200/remoteEntry.js",
      //     "footer": "footer@http://localhost:4200/remoteEntry.js",
      //     "tracker": "tracker@http://localhost:4200/remoteEntry.js",
      //     "host": "host@http://localhost:4200/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
