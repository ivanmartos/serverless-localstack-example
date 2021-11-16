import {nanoid} from 'nanoid'
import {APIGatewayProxyEvent} from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<string> => {
    return 'Hello world ' + nanoid()
}
