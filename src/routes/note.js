const express = require('express');
const router = new express.Router();
const Note = require("../models/note");

defineAddNewNoteEndpoint();
defineEditNoteEndpoint();
defineGetAllNotesEndpoint();
defineGetSpecificNoteByIdEndpoint();
defineDeleteNoteByIdEndpoint();

function defineAddNewNoteEndpoint() {
    return (
        router.post("/notes", async (req, res) => {
            const note = new Note({
                ...req.body, 
            })
            try {
                await note.save();
                res.status(201).send(note);
            }
            catch (e) {
                res.status(400).send(e);
            }
        })
    )
}

function defineEditNoteEndpoint() {
    return (
        router.patch("/notes/:id", async (req, res) => {
            const updates = Object.keys(req.body);
            const allowedUpdates = ["title", "body"];
            const isValidOperation = updates.every((update) => {
                return allowedUpdates.includes(update);
            })
        
            if (!isValidOperation) {
                return res.status(400).send(({ error: "Invalid update" }));
            }
        
            try {
                const note = await Note.findById(req.params.id);
                if (!note) {
                    return res.status(404).send();
                }
                
                updates.forEach((update) => {
                    note[update] = req.body[update];
                })
                await note.save();
                res.send(note);
            }
            catch (e) {
                res.status(400).send(e);
            }
        })
    )
}

function defineGetAllNotesEndpoint() {
    return (
        router.get("/notes", async (req, res) => {
            try {
                const notes = await Note.find({});
                res.send(notes);
            }
            catch (e) {
                res.status(500).send();
            }
        
        })
    )
}


function defineGetSpecificNoteByIdEndpoint() {
    return (
        router.get("/notes/:id", async (req, res) => {
            const _id = req.params.id;
        
            try {
                const note = await Note.findOne({ _id})
                if (!note) {
                    return res.status(404).send();
                }
                res.send(note);
            }
            catch (e) {
                res.status(500).send();
            }
        
        })
    )
}


function defineDeleteNoteByIdEndpoint() {
    return (
        router.delete("/notes/:id", async (req, res) => {
            try {
                const note = await Note.findOneAndDelete({_id: req.params.id})
                if (!note) {
                    return res.status(404).send();
                }
                res.send(note);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
    )
}

module.exports = router;