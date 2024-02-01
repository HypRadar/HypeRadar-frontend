const WebsiteBtn = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <svg
        className=" lg:w-[30px] lg:h-[30px] w-[18px] h-[18px] "
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.45 17.5C20.55 16.675 20.625 15.85 20.625 15C20.625 14.15 20.55 13.325 20.45 12.5H24.675C24.875 13.3 25 14.1375 25 15C25 15.8625 24.875 16.7 24.675 17.5M18.2375 24.45C18.9875 23.0625 19.5625 21.5625 19.9625 20H23.65C22.439 22.0853 20.5176 23.665 18.2375 24.45ZM17.925 17.5H12.075C11.95 16.675 11.875 15.85 11.875 15C11.875 14.15 11.95 13.3125 12.075 12.5H17.925C18.0375 13.3125 18.125 14.15 18.125 15C18.125 15.85 18.0375 16.675 17.925 17.5ZM15 24.95C13.9625 23.45 13.125 21.7875 12.6125 20H17.3875C16.875 21.7875 16.0375 23.45 15 24.95ZM10 10H6.35C7.54857 7.90902 9.46849 6.32686 11.75 5.55C11 6.9375 10.4375 8.4375 10 10ZM6.35 20H10C10.4375 21.5625 11 23.0625 11.75 24.45C9.47328 23.6646 7.55606 22.0846 6.35 20ZM5.325 17.5C5.125 16.7 5 15.8625 5 15C5 14.1375 5.125 13.3 5.325 12.5H9.55C9.45 13.325 9.375 14.15 9.375 15C9.375 15.85 9.45 16.675 9.55 17.5M15 5.0375C16.0375 6.5375 16.875 8.2125 17.3875 10H12.6125C13.125 8.2125 13.9625 6.5375 15 5.0375ZM23.65 10H19.9625C19.5713 8.45182 18.992 6.95737 18.2375 5.55C20.5375 6.3375 22.45 7.925 23.65 10ZM15 2.5C8.0875 2.5 2.5 8.125 2.5 15C2.5 18.3152 3.81696 21.4946 6.16117 23.8388C7.3219 24.9996 8.69989 25.9203 10.2165 26.5485C11.733 27.1767 13.3585 27.5 15 27.5C18.3152 27.5 21.4946 26.183 23.8388 23.8388C26.183 21.4946 27.5 18.3152 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
          fill="#4D4D4D"
        />
      </svg>
    </a>
  );
};

export default WebsiteBtn;
