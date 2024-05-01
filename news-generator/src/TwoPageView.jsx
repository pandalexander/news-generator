function TwoPageView() {
  return (
    <>
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="w-1/3 bg-gray-200">Left Pane Content</div>

        {/* Right Pane */}
        <div className="w-2/3 bg-gray-300">Right Pane Content</div>
      </div>
    </>
  );
}

export default TwoPageView;
