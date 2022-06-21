// tslint:disable
export const DataSource1: { [key: string]: any } = {
  'Table 1': {"swagger":"2.0","info":{"description":"This is a sample Petstore server.  You can find \nout more about Swagger at \n[http://swagger.io](http://swagger.io) or on \n[irc.freenode.net, #swagger](http://swagger.io/irc/).\n","version":"1.0.0","title":"Swagger Petstore","termsOfService":"http://swagger.io/terms/","contact":{"email":"apiteam@swagger.io"},"license":{"name":"Apache 2.0","url":"http://www.apache.org/licenses/LICENSE-2.0.html"}},"host":"virtserver.swaggerhub.com","basePath":"/rg17/indigo/1.0.0","tags":[{"name":"pet","description":"Everything about your Pets","externalDocs":{"description":"Find out more","url":"http://swagger.io"}},{"name":"store","description":"Access to Petstore orders"},{"name":"user","description":"Operations about user","externalDocs":{"description":"Find out more about our store","url":"http://swagger.io"}}],"schemes":["https","http"],"paths":{"/pet":{"post":{"summary":"Add a new pet to the store","operationId":"addPet","responses":{"405":{"description":"Invalid input"}}},"put":{"summary":"Update an existing pet","operationId":"updatePet","responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"},"405":{"description":"Validation exception"}}}},"/pet/findByStatus":{"get":{"summary":"Finds Pets by status","description":"Multiple status values can be provided with comma separated strings","operationId":"findPetsByStatus","responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/Pet"}}},"400":{"description":"Invalid status value"}}}},"/pet/findByTags":{"get":{"summary":"Finds Pets by tags","description":"Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.","operationId":"findPetsByTags","deprecated":true,"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/Pet"}}},"400":{"description":"Invalid tag value"}}}},"/pet/{petId}":{"get":{"summary":"Find pet by ID","description":"Returns a single pet","operationId":"getPetById","responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/Pet"}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}}},"post":{"summary":"Updates a pet in the store with form data","operationId":"updatePetWithForm","responses":{"405":{"description":"Invalid input"}}},"delete":{"summary":"Deletes a pet","operationId":"deletePet","responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Pet not found"}}}},"/pet/{petId}/uploadImage":{"post":{"summary":"uploads an image","operationId":"uploadFile","responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiResponse"}}}}},"/store/inventory":{"get":{"summary":"Returns pet inventories by status","description":"Returns a map of status codes to quantities","operationId":"getInventory","responses":{"200":{"description":"successful operation","schema":{"type":"object","additionalProperties":{"type":"integer","format":"int32"}}}}}},"/store/order":{"post":{"summary":"Place an order for a pet","operationId":"placeOrder","responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/Order"}},"400":{"description":"Invalid Order"}}}},"/store/order/{orderId}":{"get":{"summary":"Find purchase order by ID","description":"For valid response try integer IDs with value >= 1 and <= 10.\\ \\ Other values will generated exceptions","operationId":"getOrderById","responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/Order"}},"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}},"delete":{"summary":"Delete purchase order by ID","description":"For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors","operationId":"deleteOrder","responses":{"400":{"description":"Invalid ID supplied"},"404":{"description":"Order not found"}}}},"/user":{"post":{"summary":"Create user","description":"This can only be done by the logged in user.","operationId":"createUser","responses":{"default":{"description":"successful operation"}}}},"/user/createWithArray":{"post":{"summary":"Creates list of users with given input array","operationId":"createUsersWithArrayInput","responses":{"default":{"description":"successful operation"}}}},"/user/createWithList":{"post":{"summary":"Creates list of users with given input array","operationId":"createUsersWithListInput","responses":{"default":{"description":"successful operation"}}}},"/user/login":{"get":{"summary":"Logs user into the system","operationId":"loginUser","responses":{"200":{"description":"successful operation","headers":{"X-Rate-Limit":{"type":"integer","format":"int32","description":"calls per hour allowed by the user"},"X-Expires-After":{"type":"string","format":"date-time","description":"date in UTC when token expires"}},"schema":{"type":"string"}},"400":{"description":"Invalid username/password supplied"}}}},"/user/logout":{"get":{"summary":"Logs out current logged in user session","operationId":"logoutUser","responses":{"default":{"description":"successful operation"}}}},"/user/{username}":{"get":{"summary":"Get user by user name","operationId":"getUserByName","responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/User"}},"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}},"put":{"summary":"Updated user","description":"This can only be done by the logged in user.","operationId":"updateUser","responses":{"400":{"description":"Invalid user supplied"},"404":{"description":"User not found"}}},"delete":{"summary":"Delete user","description":"This can only be done by the logged in user.","operationId":"deleteUser","responses":{"400":{"description":"Invalid username supplied"},"404":{"description":"User not found"}}}}},"securityDefinitions":{"petstore_auth":{"type":"oauth2","authorizationUrl":"http://petstore.swagger.io/oauth/dialog","flow":"implicit","scopes":{"write:pets":"modify pets in your account","read:pets":"read your pets"}},"api_key":{"type":"apiKey","name":"api_key","in":"header"}},"definitions":{"Order":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status"},"complete":{"type":"boolean","default":false}},"xml":{"name":"Order"}},"Category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"User":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"xml":{"name":"User"}},"Tag":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}},"Pet":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/definitions/Category"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"name":"photoUrl","wrapped":true},"items":{"type":"string"}},"tags":{"type":"array","xml":{"name":"tag","wrapped":true},"items":{"$ref":"#/definitions/Tag"}},"status":{"type":"string","description":"pet status in the store"}},"xml":{"name":"Pet"}},"ApiResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}}}},"externalDocs":{"description":"Find out more about Swagger","url":"http://swagger.io"}},
};