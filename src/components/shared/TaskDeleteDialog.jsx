import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TaskDeleteDialog = ({ children, className, onConfirm }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="outline"
            className={`flex items-center gap-1 ${className}`}
          >
            <Trash2 className="h-4 w-4" />
            {children}
          </Button>
        }
      />
      <AlertDialogContent className=" gap-0 rounded-2xl bg-white/80 bg-gradient-to-br from-white/80 via-white/85 to-indigo-50/45  ring-white/40 sm:max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-rose-500 hover:bg-red-600 hover:text-white"
          >
            Yes, delete It!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TaskDeleteDialog;
