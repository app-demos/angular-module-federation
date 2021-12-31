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
    uniqueName: "footer",
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
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        './FooterComponent': './projects/footer/src/app/components/footer/footer.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "header": "header@http://localhost:3003/remoteEntry.js",
      //     "todos": "todos@http://localhost:3001/remoteEntry.js",
      //     "tracker": "tracker@http://localhost:3002/remoteEntry.js",
      //     "host": "host@http://localhost:4200/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
