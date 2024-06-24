export default async function Read(props) {
  // console.log("vkfka:: ", props);
  // console.log("dkdlel:: ", props.params);
  // console.log("dkdlel:: ", props.params.id);

  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  // console.log("Response status: ", resp.status);
  // console.log("Response headers: ", resp.headers);

  // console.log("anjdi:: ", resp);
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {/* params : {props.params.id} */}
      {topic.body}
    </>
  );
}
