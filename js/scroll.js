	// change direction of all body
    $("html, body").mousewheel(function(event, delta) {
      this.scrollLeft += (delta * 30);
    });
    // end of changing schrooling