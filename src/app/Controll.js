"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Controll() {
  const params = useParams();
  console.log("파람:", params);

  const id = params.id;
  console.log("파람.id:", id);
  const router = useRouter();
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {/* <li>
        <Link href="/update/1">Update</Link>
      </li>
      <li>
        <input type="button" value="delete" />
      </li> */}
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch("http://localhost:9999/topics/" + id, options)
                  .then((resp) => resp.json())
                  .then((result) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
