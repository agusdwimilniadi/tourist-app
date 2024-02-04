const IdentityLabel = ({ label, text }: { label: string; text?: string }) => {
  return (
    <div className="text-sm">
      <p className="font-semibold">{label} :</p>
      <p className="font-light">{text}</p>
    </div>
  );
};

export default IdentityLabel;
