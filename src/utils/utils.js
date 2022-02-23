const validateNoteUpdateValues = (updates) => {
    // const updates = Object.keys(reqBody);
    const allowedUpdates = ["title", "body"];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValidOperation) {
        return false;
    }
    return true;
}

module.exports.validateNoteUpdateValues = validateNoteUpdateValues;