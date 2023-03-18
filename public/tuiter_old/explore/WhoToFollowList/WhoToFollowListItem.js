const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2 p-2">
                <img class="img-fluid rounded-circle"
                    src=${who.avatarIcon} />
            </div>

            <div class="col-7 pl-0">
                <span class="fw-bold">${who.userName} </span><i class="fas fa-check-circle"></i>
                <p class="text-secondary mb-1">@${who.handle}</p>
            </div>

            <div class="col-3">
                <button class="float-end btn btn-primary rounded-pill">Follow</button>
            </div>
        </div>
    </li>
`);
}
export default WhoToFollowListItem;