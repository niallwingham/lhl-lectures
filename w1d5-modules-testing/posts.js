var id = 0;

function publishPost(title, content) {
  id = id + 1;
  return {
    title: title,
    content: content,
    timestamp: Date.now(),
    id: id,
  };
}

module.exports.publishPost = publishPost;
