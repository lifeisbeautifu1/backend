"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = require("../controllers/messages");
const router = (0, express_1.Router)();
router.post('/', messages_1.sendMessage);
router.get('/', messages_1.getMessages);
router.patch('/:id', messages_1.updateMessage);
router.delete('/:id', messages_1.deleteMessage);
exports.default = router;
