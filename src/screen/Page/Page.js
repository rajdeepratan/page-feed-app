import React from "react";

import { Card, EmptyBox, Loading } from "component";

function Page({ selectedOption, postLoading, postFeed, errorMessage }) {
  return (
    <div className="page">
      {postLoading && <Loading />}
      {postFeed && postFeed.length && (
        <Card selectedOption={selectedOption} postFeed={postFeed} />
      )}
      {errorMessage && <EmptyBox errorMessage={errorMessage} />}
    </div>
  );
}

export default Page;
