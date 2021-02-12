let ownerPermissionCount = 0;

$('#ownerPermission input[type=checkbox]').change(function() {
    if ($(this).prop("checked")) {
        ownerPermissionCount += parseInt($(this).val());
    } else {
        ownerPermissionCount -= parseInt($(this).val());
    }
    $("#ownerPermissionText").html(ownerPermissionCount);
});

let groupPermissionCount = 0;

$('#groupPermission input[type=checkbox]').change(function() {
    if ($(this).prop("checked")) {
        groupPermissionCount += parseInt($(this).val());
    } else {
        groupPermissionCount -= parseInt($(this).val());
    }
    $("#groupPermissionText").html(groupPermissionCount);
});

let otherPermissionCount = 0;

$('#otherPermission input[type=checkbox]').change(function() {
    if ($(this).prop("checked")) {
        otherPermissionCount += parseInt($(this).val());
    } else {
        otherPermissionCount -= parseInt($(this).val());
    }
    $("#otherPermissionText").html(otherPermissionCount);
});


$('input[type=checkbox]').change(function() {
    $("#result").html(ownerPermissionCount.toString() + groupPermissionCount.toString() + otherPermissionCount.toString());
});