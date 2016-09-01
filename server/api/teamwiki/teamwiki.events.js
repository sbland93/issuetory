/**
 * Teamwiki model events
 */

'use strict';

import {EventEmitter} from 'events';
import Teamwiki from './teamwiki.model';
var TeamwikiEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeamwikiEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Teamwiki.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TeamwikiEvents.emit(event + ':' + doc._id, doc);
    TeamwikiEvents.emit(event, doc);
  }
}

export default TeamwikiEvents;
