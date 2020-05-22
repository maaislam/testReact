import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import UiSegment from './UiSegment';
import ActionBtn from './ActionBtn';
import FurtherInfo from './FurtherInfo';




const App = () => {

  return(

   <div className="ui container comments">


      <ApprovalCard>
        <Message 
          headerChanges = "changes in Service" 
          detailMessage = "We just updated our terms of service to strengthen our Secutity"/> 
        <div>
          <h4>Warning</h4>
          <p>Are You Sure ?</p>
        </div>
      </ApprovalCard>


      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Samuel Vince" 
          timeAgo = "Today at 4:00pm" 
          comment = {faker.lorem.sentence()}
          />
     </ApprovalCard>

     <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Arafat Vin" 
          timeAgo = "Today at 6:00pm" 
          comment = {faker.lorem.sentence()} 
          />
     </ApprovalCard>


     <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Jane Mia" 
          timeAgo = "Testerday at 7:00pm" 
          comment = {faker.lorem.sentence()} 
          />
    </ApprovalCard>


    {/* Just a test1 testing use of Props*/}

    <UiSegment>
      <ActionBtn fileOutline = "No documents found" btnText = "Add Document"/>
    </UiSegment>

    <UiSegment>
      <FurtherInfo headerText = "For Your Information" moreInfo = {faker.lorem.paragraphs()}/>
    </UiSegment>


  

   </div>
  );

}

ReactDOM.render(<App/>, document.querySelector('#root'));