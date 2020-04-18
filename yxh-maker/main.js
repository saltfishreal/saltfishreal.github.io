document.getElementById('submit').addEventListener('click', function () {
    subject = document.getElementById("subject").value;
    _event = document.getElementById("event").value;
    subjectEvent = document.getElementById("subject-event").value;
	if (subject.length === 0 || _event.length === 0 || subjectEvent.length === 0) return;
    result = `　　${subject}${_event}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${_event}是怎么回事呢，下面就让小编带大家一起了解吧。\r\n　　${subject}${_event}，其实就是${subjectEvent}，大家可能会很惊讶${subject}怎么会${_event}呢？但事实就是这样，小编也感到非常惊讶。\r\n　　这就是关于${subject}${_event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`;
    document.getElementById("result").value = result;
});