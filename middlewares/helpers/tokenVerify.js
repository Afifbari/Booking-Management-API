/*******************************

This verifyToken helper is redundant if 
jwtdecode is used for checking authorization

********************************/

// Format of Token
// Authorization: Bearer <access_token>

// Verify Token
exports.verifyToken = (req, res, next) => {
	// Get auth header Value
	const bearerHeader = req.headers["authorization"];

	// Check if bearer is undefined

	if (typeof bearerHeader !== "undefined") {
		const token = bearerHeader.split(" ")[1];

		// Set the token
		req.token = token;

		next();
	} else {
		// Forbidden
		return res.json({ msg: "Access denied." });
	}
};
