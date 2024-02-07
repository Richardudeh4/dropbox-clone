import Dropzone from "@/components/Dropzone"
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import TableWrapper from "@/components/table/TableWrapper";
import { collection, getDocs } from "firebase/firestore";

const Dashboard= async () => {
  const {userId} = auth();
  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map( doc => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    fullName: doc.data().fullName,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  console.log(skeletonFiles);
  return (
    <div className="border-t">
      <Dropzone/>
    <section className="container space-y-5">
      <h2 className="font-bold">All Files</h2>

      <div>
     
        <TableWrapper skeletonFiles={skeletonFiles}/>
      </div>
    </section>
    </div>
  )
}

export default Dashboard