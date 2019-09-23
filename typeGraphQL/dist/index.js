"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const graphql_yoga_1 = require("graphql-yoga");
const type_graphql_1 = require("type-graphql");
const TaskResolver_1 = require("./resolvers/TaskResolver");
const ProjectResolver_1 = require("./resolvers/ProjectResolver");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [TaskResolver_1.default, ProjectResolver_1.default],
            emitSchemaFile: true
        });
        const server = new graphql_yoga_1.GraphQLServer({
            schema,
        });
        server.start(() => console.log("Server is running on http://localhost:4000"));
    });
}
bootstrap();
//# sourceMappingURL=index.js.map