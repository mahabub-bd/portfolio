import React from "react";

const PublishSoonPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center  md:p-4 p-4 bg-white shadow-xl rounded-lg">
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-6">
          This page is not published yet but will be available very soon.
        </p>
      </div>
    </div>
  );
};

export default PublishSoonPage;
