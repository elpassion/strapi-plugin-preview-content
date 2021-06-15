"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = __importDefault(require("../../package.json"));
var pluginId_1 = __importDefault(require("./pluginId"));
var Initializer_1 = __importDefault(require("./containers/Initializer"));
var lifecycles_1 = __importDefault(require("./lifecycles"));
var translations_1 = __importDefault(require("./translations"));
var SettingsPage_1 = __importDefault(require("./containers/SettingsPage"));
var getTrad_1 = __importDefault(require("./utils/getTrad"));
exports.default = (function (strapi) {
    var pluginDescription = package_json_1.default.strapi.description || package_json_1.default.description;
    var icon = package_json_1.default.strapi.icon;
    var name = package_json_1.default.strapi.name;
    var plugin = {
        blockerComponent: null,
        blockerComponentProps: {},
        description: pluginDescription,
        icon: icon,
        id: pluginId_1.default,
        initializer: Initializer_1.default,
        injectedComponents: [],
        isReady: false,
        isRequired: package_json_1.default.strapi.required || false,
        layout: null,
        lifecycles: lifecycles_1.default,
        mainComponent: null,
        name: name,
        preventComponentRendering: false,
        settings: {
            global: {
                links: [
                    {
                        title: {
                            id: getTrad_1.default("plugin.name"),
                            defaultMessage: "Preview Content",
                        },
                        name: "preview-content",
                        to: strapi.settingsBaseURL + "/preview-content",
                        Component: SettingsPage_1.default,
                    },
                ],
            },
        },
        trads: translations_1.default,
    };
    return strapi.registerPlugin(plugin);
});
//# sourceMappingURL=index.js.map