import {
    makeRemoteExecutableSchema,
    transformSchema,
    RenameRootFields,
    RenameTypes
} from 'graphql-tools'
import { Binding } from 'graphql-binding'
import path from 'path'
import fs from 'fs'
import GithubLink from './GithubLink'

export default class GithubBinding extends Binding {
    constructor(token) {
        // Read github schema definition from local file
        const typeDefs = fs.readFileSync(
            path.join(__dirname, '../schema/github.graphql'),
            'utf-8'
        )

        // const githubSchema = makeExecutableSchema({
        //     typeDefs,
        //     resolverValidationOptions: {
        //         requireResolversForResolveType: false
        //     }
        // })

        const schema = makeRemoteExecutableSchema({
            schema: typeDefs,
            // schema: githubSchema,
            link: new GithubLink(token),
        })

        // const transformedSchema = transformSchema(schema, [
        //     new RenameTypes((name) => `Github${name}`),
        //     new RenameRootFields((operation, name) => `Github_${name}`),
        // ])
        
        super({ schema })
    }
}