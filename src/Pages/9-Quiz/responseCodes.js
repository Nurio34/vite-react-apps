export const responseCodes = {
    Code_0: "Success Returned results successfully",
    Code_1: "No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)",
    Code_2: "Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)",
    Code_3: "Token Not Found Session Token does not exist.",
    Code_4: "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
    Code_5: "Rate Limit Too many requests have occurred. Each IP can only access the API once every 5 seconds.",
};
