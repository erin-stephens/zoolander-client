/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleAssignment } from '../../utils/data/assignmentData';

export default function ViewAssignment() {
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleAssignment(id).then(setAssignmentDetails);
    console.warn(assignmentDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div
        className="mt-5 d-flex flex-wrap"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
          backgroundSize: '100% 100%', // Stretch both horizontally and vertically
          backgroundPosition: 'center bottom', // Show the bottom edge
          padding: '30px', // Add padding for better spacing
        }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assignmentDetails.image_url} alt={assignmentDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h3>{assignmentDetails.title}</h3>
          <p>{assignmentDetails.content}</p>
          <br />
          <Link href={`/assignment/edit/${assignmentDetails.id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </div>
      </div>
      <div style={{
        marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <img
          src="https://images.prismic.io/prodigy-website/8f7bda1b-dbe9-4f13-b94f-cad24806715a_support-class-teacher.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C818%2C5760%2C1920&w=1920&h=640"
          alt="kids learning"
          style={{
            width: '65%',
            height: 'auto',
            borderRadius: '10px', // Round the border
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
          }}
        />
      </div>
    </>
  );
}
