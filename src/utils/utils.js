const validateNoteUpdateValues = (updates) => {
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