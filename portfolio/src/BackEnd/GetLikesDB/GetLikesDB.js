
import {db, defaultFirestore, LikesCollection} from '../API_FIREBASE/init-firebase';

const docRef = defaultFirestore.collection("Project-Likes").doc(LikesCollection);

const GetLikesDB = () => 
{
    let getLikes_return = [];

     docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            getLikes_return = doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return getLikes_return;
}

export default GetLikesDB();